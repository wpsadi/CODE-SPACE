name = input("Enter Name of Medicine : ")
price = eval(input("Eter Price of the product : "))
qty = int(input("Enter Quantity : "))

print("""
 _______________________________________
|                                       |
|      Name of Medicine = {}          
|                                       |
|                                       |
|      Price of Medicine = ₹ {}           
|                                       |
|                                       |
|      Quantity of Medicine = {}        
|                                       |
|                                       |
 ---------------------------------------
""".format(name,price*qty,qty))