type PriceFormatOptions = {
  locale?: string;
  currency?: string;
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  compact?: boolean;
};

const DEFAULT_OPTIONS: PriceFormatOptions = {
  locale: 'ru-RU',
  currency: 'RUB',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  compact: false,
};

function formatCompactPrice(price: number, options: PriceFormatOptions) {
  const formatter = Intl.NumberFormat(options.locale, {
    notation: 'compact',
    style: 'currency',
    currency: options.currency,
    currencyDisplay: options.currencyDisplay,
    minimumFractionDigits: options.minimumFractionDigits,
    maximumFractionDigits: options.maximumFractionDigits,
  });

  return formatter.format(price);
}

export default function formatPrice(
  price: number | string,
  options: PriceFormatOptions = {},
) {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

  const mergedOptions = {
    ...DEFAULT_OPTIONS,
    ...{
      ...options,
      currency:
        !options?.currency || options.currency === 'RUR'
          ? DEFAULT_OPTIONS.currency
          : options.currency,
    },
  };

  if (mergedOptions.compact && numericPrice >= 1000) {
    return formatCompactPrice(numericPrice, mergedOptions);
  }

  return new Intl.NumberFormat(mergedOptions.locale, {
    style: 'currency',
    currency: mergedOptions.currency,
    currencyDisplay: mergedOptions.currencyDisplay,
    minimumFractionDigits: mergedOptions.minimumFractionDigits,
    maximumFractionDigits: mergedOptions.maximumFractionDigits,
  }).format(numericPrice);
}
