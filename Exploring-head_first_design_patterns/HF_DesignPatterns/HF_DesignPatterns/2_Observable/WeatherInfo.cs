using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class WeatherInfo
    {
        private int currentTemp;
        private int currentHumidity;

        internal WeatherInfo(int temp, int humidity)
        {
            this.currentTemp = temp;
            this.currentHumidity = humidity;
        }

        public int CurrentTemp
        {
            get { return this.currentTemp; }
        }

        public int CurrentHumidity
        {
            get { return this.currentHumidity; }
        }
    }
}
