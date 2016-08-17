'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */

const calculateTotals =
  listings =>
    carts =>
      carts
        .map(cart =>
          ({ customer: cart.customer, total: (
          cart.items
            .reduce((custTotal, item) => custTotal += listings
              .reduce((itemTotal, name) => itemTotal + listedPrice(name)(item), 0), 0)
          )})
        )

module.exports = {
  listing,
  cart,
  calculateTotals
}
