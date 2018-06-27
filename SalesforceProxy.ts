import axios from 'axios';
import { Report } from './../models/Report.interface';

let proxyURL = 'https://kamble-developer-edition.ap4.force.com/services/apexrest/showreport';

export class SalesforceProxy {

  showReport(report: Report) {
    return axios.post(proxyURL + '/showreport', report, {headers: {'Content-Type': 'application/json'}});
  }
};