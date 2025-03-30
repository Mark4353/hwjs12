class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.refs= {
        days: document.querySelector(` ${selector} [data-value="days"]`),
        hours: document.querySelector(`${selector} [data-value="hours"]`),
        mins: document.querySelector(`${selector} [data-value="mins"]`),
        secs: document.querySelector(`${selector} [data-value="secs"]`),
      };
      this.start( );
    };
  
    start() {
      this.updateTimer();
      this.intervalId = setInterval(() => {
        this.updateTimer();
      }, 1000);
    };
  
    updateTimer() {
      const time = this.targetDate - new Date();
      if (time < 0){
        clearInterval(this.intervalId);
        this.displayZero();
        return;

      };
      
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      
      this.refs.days.textContent = days;
      this.refs.hours.textContent = this.pad(hours);
      this.refs.mins.textContent = this.pad(mins);
      this.refs.secs.textContent = this.pad(secs);
    }
    ;
  
    displayZero( ){
      this.refs.days.textContent = "00";
      this.refs.hours.textContent = "00";
      this.refs.mins.textContent = "00";
      this.refs.secs.textContent = "00";
    };
  
    pad(value) {
      return String(value).padStart(2, "0");
    };
  };
  
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("2026"),
  }) ;
  