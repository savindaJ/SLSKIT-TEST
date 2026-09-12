#!/usr/bin/env bash
# Automates `slskit function` the same way as the interactive wizard:
#   app (existing | new) → function name → HTTP method → 128 MB → TypeScript
#
# Usage:
#   bash scripts/generate-ecommerce-functions.sh
#   bash scripts/generate-ecommerce-functions.sh --dry-run
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

DRY_RUN=0
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=1
fi

MEMORY=128
RUNTIME=typescript

# app  functionName  METHOD
# First function of an app that does not exist yet uses --new-app.
# Later functions (and existing apps like auth/product) use --app.
ENDPOINTS=(
  # auth (existing app)
  "auth refreshToken POST"
  "auth forgotPassword POST"
  "auth resetPassword POST"
  "auth verifyEmail POST"
  "auth changePassword PUT"
  "auth getMe GET"
  "auth socialLogin POST"
  "auth enable2fa POST"
  "auth verify2fa POST"
  "auth disable2fa POST"
  "auth getSessions GET"
  "auth revokeSession DELETE"

  # product (existing app)
  "product getProduct GET"
  "product updateProduct PUT"
  "product deleteProduct DELETE"
  "product searchProducts GET"
  "product getProductImages GET"
  "product uploadProductImage POST"
  "product getFeaturedProducts GET"
  "product getRelatedProducts GET"
  "product getProductVariants GET"
  "product createProductVariant POST"
  "product updateProductVariant PUT"
  "product deleteProductVariant DELETE"
  "product getProductStock GET"
  "product publishProduct POST"
  "product unpublishProduct POST"

  # category
  "category listCategories GET"
  "category getCategory GET"
  "category createCategory POST"
  "category updateCategory PUT"
  "category deleteCategory DELETE"
  "category getCategoryProducts GET"
  "category listSubcategories GET"
  "category createSubcategory POST"
  "category moveCategory PUT"

  # cart
  "cart getCart GET"
  "cart addToCart POST"
  "cart updateCartItem PUT"
  "cart removeCartItem DELETE"
  "cart clearCart DELETE"
  "cart applyCartCoupon POST"
  "cart removeCartCoupon DELETE"
  "cart getCartTotals GET"
  "cart mergeCart POST"
  "cart saveForLater POST"
  "cart getSavedItems GET"

  # order
  "order listOrders GET"
  "order getOrder GET"
  "order createOrder POST"
  "order cancelOrder POST"
  "order updateOrderStatus PUT"
  "order getOrderItems GET"
  "order getOrderTimeline GET"
  "order reorder POST"
  "order getOrderInvoice GET"
  "order downloadOrderInvoice GET"
  "order confirmOrder POST"

  # checkout
  "checkout startCheckout POST"
  "checkout getCheckout GET"
  "checkout updateCheckout PUT"
  "checkout setCheckoutShipping POST"
  "checkout setCheckoutPayment POST"
  "checkout placeOrder POST"
  "checkout validateCheckout POST"
  "checkout getCheckoutSummary GET"
  "checkout applyCheckoutGiftCard POST"

  # customer
  "customer getCustomer GET"
  "customer updateCustomer PUT"
  "customer deleteCustomer DELETE"
  "customer listCustomers GET"
  "customer getCustomerOrders GET"
  "customer getCustomerAddresses GET"
  "customer updateCustomerPreferences PUT"
  "customer getCustomerProfile GET"
  "customer deactivateCustomer POST"

  # inventory
  "inventory getInventory GET"
  "inventory updateInventory PUT"
  "inventory reserveStock POST"
  "inventory releaseStock POST"
  "inventory listLowStock GET"
  "inventory adjustInventory POST"
  "inventory getInventoryHistory GET"
  "inventory syncInventory POST"
  "inventory getWarehouseStock GET"

  # review
  "review listReviews GET"
  "review getReview GET"
  "review createReview POST"
  "review updateReview PUT"
  "review deleteReview DELETE"
  "review approveReview POST"
  "review reportReview POST"
  "review getProductReviews GET"
  "review getReviewStats GET"

  # payment
  "payment listPayments GET"
  "payment getPayment GET"
  "payment createPayment POST"
  "payment capturePayment POST"
  "payment refundPayment POST"
  "payment getPaymentMethods GET"
  "payment addPaymentMethod POST"
  "payment deletePaymentMethod DELETE"
  "payment setDefaultPaymentMethod PUT"
  "payment webhookPayment POST"

  # shipping
  "shipping listShippingMethods GET"
  "shipping getShippingMethod GET"
  "shipping calculateShipping POST"
  "shipping createShipment POST"
  "shipping getShipment GET"
  "shipping trackShipment GET"
  "shipping updateShipment PUT"
  "shipping cancelShipment POST"
  "shipping listShippingZones GET"
  "shipping createShippingZone POST"

  # coupon
  "coupon listCoupons GET"
  "coupon getCoupon GET"
  "coupon createCoupon POST"
  "coupon updateCoupon PUT"
  "coupon deleteCoupon DELETE"
  "coupon validateCoupon POST"
  "coupon applyCoupon POST"
  "coupon getCouponUsage GET"

  # wishlist
  "wishlist getWishlist GET"
  "wishlist addToWishlist POST"
  "wishlist removeFromWishlist DELETE"
  "wishlist clearWishlist DELETE"
  "wishlist moveWishlistToCart POST"
  "wishlist getWishlistCount GET"

  # address
  "address listAddresses GET"
  "address getAddress GET"
  "address createAddress POST"
  "address updateAddress PUT"
  "address deleteAddress DELETE"
  "address setDefaultAddress PUT"
  "address validateAddress POST"
)

created=0
skipped=0
failed=0
known_apps="|"

echo "Generating ${#ENDPOINTS[@]} ecommerce functions via slskit function..."
echo "memory=${MEMORY}MB  runtime=${RUNTIME}  dry-run=${DRY_RUN}"
echo

for row in "${ENDPOINTS[@]}"; do
  read -r app name method <<<"$row"
  handler="src/functions/${app}/${name}/handler.ts"

  if [[ -d "src/functions/${app}" ]]; then
    known_apps="${known_apps}${app}|"
  fi

  if [[ -f "$handler" ]]; then
    printf "skip  %-12s %-28s already exists\n" "$app" "$name"
    skipped=$((skipped + 1))
    continue
  fi

  if [[ "$known_apps" == *"|${app}|"* ]]; then
    cmd=(slskit function --app "$app" "$name" --method "$method" --memory "$MEMORY" -r "$RUNTIME")
  else
    cmd=(slskit function --new-app "$app" "$name" --method "$method" --memory "$MEMORY" -r "$RUNTIME")
    known_apps="${known_apps}${app}|"
  fi

  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf "dry   %s\n" "${cmd[*]}"
    created=$((created + 1))
    continue
  fi

  if output="$("${cmd[@]}" 2>&1)"; then
    route="$(printf "%s\n" "$output" | awk '/route:/{print $2, $3}')"
    printf "ok    %-12s %-28s %s\n" "$app" "$name" "${route:-$method}"
    created=$((created + 1))
  else
    printf "fail  %-12s %-28s\n%s\n" "$app" "$name" "$output"
    failed=$((failed + 1))
  fi
done

echo
echo "done  created=${created}  skipped=${skipped}  failed=${failed}  catalog=${#ENDPOINTS[@]}"
if [[ "$failed" -gt 0 ]]; then
  exit 1
fi
