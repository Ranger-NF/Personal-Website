total_sticks = 16

while total_sticks > 0:
    print() # For empty line
    print(f"{total_sticks} sticks left.")
    
    # Player 1 
    player1_choice = int(input("Player 1:\t Pick 1, 2 or 3 sticks.\nYour Choice: "))
    
    while player1_choice < 1 or player1_choice > 3 or player1_choice > total_sticks:
        print("Invalid choice.", end=" ")
        
        if player1_choice > total_sticks:
            print(f"You can't pick more than {total_sticks} sticks.")
        else:
            print("You can only pick 1, 2 or 3 sticks")
            
        player1_choice = int(input("Player 1:\t Pick 1, 2 or 3 sticks.\nYour Choice: "))
        
    total_sticks -= player1_choice
    
    if total_sticks == 0:
        print("Player 1 has taken the last stick. Player 1 LOSES!")
        break
    
    # Player 2
    player2_choice = int(input("Player 2:\t Pick 1, 2 or 3 sticks.\nYour Choice: "))
    
    while player2_choice < 1 or player2_choice > 3 or player2_choice > total_sticks:
        print("Invalid choice.", end=" ")
        
        if player2_choice > total_sticks:
            print(f"You can't pick more than {total_sticks} sticks.")
        else:
            print("You can only pick 1, 2 or 3 sticks")
            
        player2_choice = int(input("Player 2:\t Pick 1, 2 or 3 sticks.\nYour Choice: "))
        
    total_sticks -= player2_choice
    
    if total_sticks == 0:
        print("Player 2 has taken the last stick. Player 1 LOSES!")
        break
        
    
    