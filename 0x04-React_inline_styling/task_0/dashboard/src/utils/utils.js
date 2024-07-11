export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLastestNotification() {
    return '<strong>Urgent requirements</strong> - complete by EOD';
}
