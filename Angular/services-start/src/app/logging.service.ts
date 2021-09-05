export class LoggingService {
    logStatusChange(status: string) {
      console.log("A server Status Changed, new Status:" + status);
    }
}
