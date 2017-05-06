using System.Text;
using System;
namespace Core

{   
    public static class PhonewordTranslator
    {
        //**************************************************************************
        // This gets called in MainActivity upon translateButton being clicked
        //**************************************************************************

        public static string ToNumber(string raw)
        {
            if (string.IsNullOrWhiteSpace(raw))
                return "";
            else
                raw = raw.ToUpperInvariant();

            // setting up variable to hold result that will be returned
            var newNumber = new StringBuilder();

            foreach (var c in raw)
            {
                // If c is a number then just append that number to newNumber
                if (" -0123456789".Contains(c))
                    newNumber.Append(c);
                else
                {
                // However, if c is a letter, then call the TranslateToNumber method on it
                // and append what is returned by that method
                    var result = TranslateToNumber(c);
                    if (result != null)
                        newNumber.Append(result);
                }
                // Otherwise have skipped non-numeric char
            }
            return newNumber.ToString();
        }

        //************************************************************
        // The below methods are invoked above in ToNumber
        //************************************************************

        static bool Contains (this string keyString, char c)
        {
            return keyString.IndexOf(c) >= 0;
        }

        static int? TranslateToNumber(char c)
        {
            if ("ABC".Contains(c))
                return 2;
            else if ("DEF".Contains(c))
                return 3;
            else if ("GHI".Contains(c))
                return 4;
            else if ("JKL".Contains(c))
                return 5;
            else if ("MNO".Contains(c))
                return 6;
            else if ("PQRS".Contains(c))
                return 7;
            else if ("TUV".Contains(c))
                return 8;
            else if ("WXYZ".Contains(c))
                return 9;
            return null;
        }
    }
}