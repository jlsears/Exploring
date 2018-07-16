using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace HF_DesignPatterns
{
    public class Coffee : CaffeineBeverage
    {
        public override void brew()
        {
            Console.WriteLine("Dripping coffee through filter");
        }

        public override void addCondiments()
        {
            Console.WriteLine("Adding cream and sugar");
        }

        public override Boolean customerWantsCondiments()
        {
            string answer = getUserInput();

            if (answer.ToLower().StartsWith("y"))
            {
                return true;
            } else
            {
                return false;
            }
        }

        private String getUserInput()
        {
            String answer = null;

            Console.WriteLine("Would you like milk and sugar with your coffee? (y/n)");

            string response = Console.ReadLine();

            try
            {
                answer = response;
            }

            catch (IOException e)
            {
                Console.WriteLine("System error trying to read your answer, error message: " + e);
            }

            if (answer == null)
            {
                return "no";
            }

            return answer;
        }
    } 
}
