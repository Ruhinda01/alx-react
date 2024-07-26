import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

test('getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirements</strong> - complete by EOD');
});
