export class DataHelper {
  success = false;
  data: any;
  errors: Array<ErrorItem>;
  jwt: string;
}

class ErrorItem {
  code? = '0';
  message: string;
  criticality? = '';
}
