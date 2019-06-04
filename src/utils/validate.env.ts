import {
  cleanEnv, str, port,
} from 'envalid';

export class ValidateEnv {
  public static checkEnv() {
    cleanEnv(process.env, {
      MONGO_PASSWORD: str(),
      MONGO_PATH: str(),
      MONGO_USER: str(),
      PORT: port(),
    });
  }
}
