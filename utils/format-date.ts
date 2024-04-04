export default function formatDate(date: Date) {
    return date.toLocaleDateString('en-GB', {
        month: 'short', year: 'numeric'
    });
}