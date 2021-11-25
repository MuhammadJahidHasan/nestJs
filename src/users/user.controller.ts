import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Controller('user')

export class UserController {

   constructor(private userService: UserService) {}

   @Post()
   @HttpCode(200)
   async addUser(@Body() user, @Res() res)  {
       
       try {
          const data = await this.userService.addUser(user);
          if(Object.keys(data).length > 0) {
          res.json({
              result: data,
              msg: 'User added successfully'
          });
        } else {
            res.status(500).json({
                msg: 'User is not added successfully'
            });
        }
       } catch(err) {
            res.status(500).json({
                msg: 'User is not added successfully!!!'
            });
       }

   }

}
