import { IsString, IsEmail, Matches, IsNotEmpty } from 'class-validator';

export class GetSessionResDto {
  id: string;

  username: string;
}

export class RegisterReqDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  bio!: string;

  /**
   * 8 characters length
   * 2 letters in Upper Case
   * 1 Special Character (!@#$&*)
   * 2 numerals (0-9)
   * 3 letters in Lower Case
   */
  @IsNotEmpty()
  @Matches(
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$./,
    {
      message: 'password too weak',
    },
  )
  password: string;
}

export class LoginReqDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
