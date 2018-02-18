using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace HF_DesignPatterns
{
    class LowerCaseInputStream
    {
        Stream lcReader;
  
        public LowerCaseInputStream(Stream tr, String str)
        {
            this.lcReader = tr;
            
            StreamReader sr2 = new StreamReader(lcReader);
            String string2 = sr2.ReadToEnd().ToLower();
            tr.Close();

            File.WriteAllText(str, string2);

        }
    }
}
