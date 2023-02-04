export async function loadMessages(locale) {
    return (await import(`../locales/${locale}.json`)).default;
}