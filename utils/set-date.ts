export default function setDate(monthYearString: string) {
    return new Date(Date.parse(monthYearString));
}
