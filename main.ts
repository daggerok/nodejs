import {append} from './modules/utils/Appender'
import Greeter1 from './modules/Greeter1'
import Greeter2 from './modules/Greeter2'
import {greeter3} from './modules/Greeter3'
import greeter4 from './modules/Greeter4'

append(Greeter1.greeter1)
append(Greeter2.greeter2)
append(greeter3)
append(greeter4)