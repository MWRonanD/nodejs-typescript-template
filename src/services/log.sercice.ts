import { Service } from 'typedi';
@Service()
export class LogService {
    
    log(toLog: any) {
        console.log('Log services : ', toLog);
        
        // TODO : Log me ! 
    }
}