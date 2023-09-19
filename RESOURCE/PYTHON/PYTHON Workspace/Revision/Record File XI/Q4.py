name = input("Enter Your Name : ")
SaleMade = eval(input("Enter Your Sales This Month : "))
targetSale = eval(input("WHat was Your Target for This Month : "))

def saleRemark(sale):
   if (sale>100):
      return "Employee of the Month"
   elif (80<=sale<=100):
      return "Teamwork Award"
   elif (60<=sale<=79):
      return "Creative Employee"
   else:
      return "Sorry! Your colleagues Outperformed you"
   

print(saleRemark(SaleMade))