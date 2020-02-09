import {
    IsBoolean,
    IsString,
    IsObject,
    IsInt,
    IsPositive, IsDefined
} from "class-validator";
import FirebaseAppMessaging from "./push/FirebaseAppMessaging";

export default class Configuration {

    @IsString()
    @IsDefined()
    public swPath: string;

    @IsObject()
    public registrationOptions: RegistrationOptions = {};

    // Enable Debug mode. More information is showed in the console for helping to Debug your PWA.
    @IsBoolean()
    public debug = false;

    @IsBoolean()
    public desktop = false;

    // Interval in day between invitation. Set 0 if you want to disable our system.
    @IsInt()
    @IsPositive()
    public intervalBetweenInvitation = 50;

    // Add additional criteria before propose invite to install
    // A function which has to respond a boolean. True if you are ready to show invite, false otherwise
    public additionnalInviteCriteria: () => boolean = () => true;

    // Initialized firebase app
    public firebaseApp?: FirebaseAppMessaging;
}