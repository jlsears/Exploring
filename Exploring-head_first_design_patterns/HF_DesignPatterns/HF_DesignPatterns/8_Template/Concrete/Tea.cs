using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace HF_DesignPatterns
{
    public class Tea : CaffeineBeverage
    {
        public override void brew()
        {
            Console.WriteLine("Steeping the tea");
        }

        public override void addCondiments()
        {
            Console.WriteLine("Adding lemon");
        }

        public override bool customerWantsCondiments()
        {
            string answer = getUserInput();

            if(answer.ToLower().StartsWith("y"))
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

            Console.WriteLine("Would you like lemon with your tea?");

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
