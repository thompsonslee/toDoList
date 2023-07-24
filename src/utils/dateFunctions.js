export default function dateFunctions() {
  class Dateclass {
    constructor(date) {
      this.date = date;
      this.day = this.setVariables().day;
      this.month = this.setVariables().month;
      this.year = this.setVariables().year;
    }

    getFormatedDate() {
      return `${this.day}-${this.month}-${this.year}`;
    }

    setVariables() {
      const thisDate = new Date(this.date);
      const day = thisDate.getDate();
      const month = thisDate.getMonth() + 1;
      const year = thisDate.getFullYear();

      return { day, month, year };
    }

    addDay() {
      this.date.setDate(this.date.getDate() + 1);
      this.day = this.setVariables().day;
      this.month = this.setVariables().month;
      this.year = this.setVariables().year;
    }
  }

  function formatDate(date) {
    const thisDate = new Dateclass(date);
    return thisDate.getFormatedDate();
  }

  function isNextWeek(date) {
    const currentDate = new Dateclass(new Date());
    const thisDate = new Dateclass(new Date(date));
    let isThisWeek = false;
    for (let i = 0; i < 7; i++) {
      if (thisDate.getFormatedDate() === currentDate.getFormatedDate()) {
        isThisWeek = true;
        return isThisWeek;
      }
      currentDate.addDay();
    }
    return isThisWeek;
  }
  return { formatDate, isNextWeek };
}
