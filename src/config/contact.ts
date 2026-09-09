export const CONTACT = {
  company: 'Butterfly Tech / GerahtAI',
  email: 'butterflytechco@gmail.com',
  address: 'REPLACE_WITH_OFFICIAL_ADDRESS',
  phone: 'REPLACE_WITH_OFFICIAL_PHONE',
  phoneSecondary: 'REPLACE_WITH_OFFICIAL_PHONE_SECONDARY',
} as const

export function isPlaceholder(value: string): boolean {
  return value.startsWith('REPLACE_WITH_')
}
