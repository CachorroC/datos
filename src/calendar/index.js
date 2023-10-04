"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarBuilder = exports.nombresDeMeses = exports.nombreDiasSemana = void 0;
exports.nombreDiasSemana = [
    'Mimingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];
exports.nombresDeMeses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
function CalendarBuilder() {
    const rows = new Set();
    const todayNow = new Date();
    const date = todayNow.getDate();
    const currentMonth = todayNow.getMonth();
    const currentYear = todayNow.getFullYear();
    const firstDayofMonth = new Date(currentYear, currentMonth, 1)
        .getDay();
    const firstDateofMonth = new Date(currentYear, currentMonth, 1);
    const firstWeekDayofMonth = firstDateofMonth.getDay();
    const lastDateofMonth = new Date(currentYear, currentMonth + 1, 0)
        .getDate();
    const lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth)
        .getDay();
    const lastDateofPastMonth = new Date(currentYear, currentMonth, 0)
        .getDate();
    for (let dayBefore = firstDayofMonth; dayBefore > 0; dayBefore--) {
        const href = `${currentYear}-${currentMonth - 1}-${lastDateofPastMonth - dayBefore + 1}`;
        rows.add({
            href: href,
            current: false,
            dayOfWeek: new Date(href)
                .getDay()
        });
    }
    for (let dayInMonth = 1; dayInMonth <= lastDateofMonth; dayInMonth++) {
        const href = `${currentYear}-${currentMonth}-${dayInMonth}`;
        rows.add({
            href: href,
            current: true,
            dayOfWeek: new Date(href)
                .getDay()
        });
    }
    for (let dayAfterMonth = lastDayofMonth; dayAfterMonth < 6; dayAfterMonth++) {
        const href = `${currentYear}-${currentMonth}-${dayAfterMonth}`;
        rows.add({
            href: href,
            current: false,
            dayOfWeek: new Date(href)
                .getDay()
        });
    }
    return Array.from(rows);
}
exports.CalendarBuilder = CalendarBuilder;
console.log(CalendarBuilder());
