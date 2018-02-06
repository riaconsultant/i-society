import { AuthService } from './auth.service';
import { CommonService } from './common.service';

export const serviceContainer=[
    AuthService,CommonService
]

export {AuthService} from './auth.service';
export {CommonService} from './common.service';