using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace HF_DesignPatterns
{
    class Program3a
    {
        static void Main(string[] args)
        {
            String tfile = @"C:\Users\Jennifer\Documents\DPtest.txt";

            FileStream fs = File.OpenRead(tfile);

            LowerCaseInputStream readMe = new LowerCaseInputStream(new BufferedStream(fs), tfile);

            Console.WriteLine("Conversion completed! Hit any key to exit.");

            Console.ReadLine();

            Environment.Exit(1);
        }
    }
}
