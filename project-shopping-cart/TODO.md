# revamping the eCommerce storefront

# planned features for implementation ------------------------------------

- loading screen on startup
- correct errors with light/dark modes
- color-coded categories
- more extensive css animations
- more attractive, colorful, dynamic UX

- client-side nav routes: cart(/cart), CATEGORIES(/category), FEATURED(/), LUCKY/random(/rand), CATALOGUE(/catalogue), product DETAIL(/id)

## planned CSS animations

- adding products to cart animation
- cart increase animation
- changing page animation (?)
- highlight animations: hovering on button grow & shrink
- navbar component switching page animation
- Front-and-center animation/advertisement?
- CAROUSEL showing featured products

# current issues ------------------------------------

## General

- UI does not properly respond to light/dark preference
- UI is overly simplistic
- client side routes should not say hello as in debug

- possible refactors: move router to main.jsx; refactor css

## Shop page

- products could be organized more intuitively.
- some form of nav component should stay on screen.
- Whole title should be dipslayed. (at least more of it)

# Planned branches ------------------------------------

2. feat: categories
3. feat: product detail
4. feat: featured page
5. feat: animations

# Current/next:

categories
use
fetch('https://fakestoreapi.com/products/categories')
.then(res=>res.json())
.then(json=>console.log(json))
