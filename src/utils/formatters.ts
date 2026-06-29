export const formatPhoneNumber = (value: string) => value.replace(/\s+/g, "").trim();
export const formatCurrency = (value: number, currency = "INR") =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
