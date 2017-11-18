using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    public class StatisticsDisplay: IObserver<WeatherInfo>
    {
        private float maxTemp = 85;
        private float minTemp = 75;
        private float tempSum = 0.0f;
        private int numReadings;

        private IDisposable cancellation;

        public virtual void Subscribe(WeatherData provider)
        {
            cancellation = provider.Subscribe(this);
        }

        public virtual void Unsubscribe()
        {
            cancellation.Dispose();
        }

        public virtual void OnCompleted()
        {
            // action upon commpletion
        }

        public virtual void OnNext(WeatherInfo info)
        {
            float temp = info.CurrentHumidity;
            tempSum += temp;
            numReadings++;

            if(temp > maxTemp)
            {
                maxTemp = temp;
            }

            if(temp < minTemp)
            {
                minTemp = temp;
            }

            Display();
        }


        public virtual void OnError(Exception e)
        {
            // No implementation needed
        }

        public virtual void Display()
        {
            Console.WriteLine("Avg/Max/Min temperature = " + (tempSum / numReadings) + "/" + maxTemp + "/" + minTemp);
        }
    }
}
