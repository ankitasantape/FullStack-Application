import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  // standalone: true,
  // imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  user: User = {
    id: 0,  // Initialize with 0 or null (id will be assigned by the backend)
    name: '',  // Empty string as the default value for the name field
    email: ''  // Empty string as the default value for the email field
  };

  constructor(private userService: UserService) { }

  // Method to create a user
  createUser(): void {
    this.userService.createUser(this.user).subscribe(
      (newUser: User) => {
        console.log('User created successfully:', newUser);
        this.user = { id: 0, name: '', email: '' };  // Reset the form
        alert('User created successfully!');
      },
      (error) => {
        console.error('Error creating user:', error);
        alert('There was an error creating the user. Please try again.');
      }
    );
  }
}
