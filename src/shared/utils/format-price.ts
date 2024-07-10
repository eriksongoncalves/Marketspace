export function formatPrice(price: number | bigint): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "code"
  })
    .format(price)
    .replace("BRL", "");
}
