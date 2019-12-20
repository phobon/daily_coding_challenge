// This problem was asked by Apple.

// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

// If we can use common API, then each job can be handled using a setTimeout() function
// A job scheduler basically has a queue of jobs to perform, so when one finishes, the next one executes, and so on
// Can handle this probably with promises


class JobScheduler {
  constructor() {
    this.jobQueue = [];
    this.currentJob = null;
  }

  execute() {
    if (!this.currentJob && this.jobQueue.length > 0) {
      const { job, timeout } = this.jobQueue[0];
      this.jobQueue.splice(0, 1);
      console.log(job, timeout, this.jobQueue);

      this.currentJob = new Promise(resolve => setTimeout(() => {
        job();
        resolve();
      }, timeout))
      .then(() => { this.currentJob = null })
      .then(() => this.execute());
    }
  }

  schedule(job, timeout) {
    this.jobQueue.push({ job, timeout });
    this.execute();
  }
}

const scheduler = new JobScheduler();
scheduler.schedule(() => console.log('function1'), 5000);
scheduler.schedule(() => console.log('function2'), 5000);
scheduler.schedule(() => console.log('function3'), 5000);