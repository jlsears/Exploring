using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class stereoOffCommand : ICommand
    {
        Stereo currentStereo;

        public stereoOffCommand(Stereo stereo)
        {
            this.currentStereo = stereo;
        }

        public void execute()
        {
            currentStereo.off();
        }

        public void undo()
        {
            currentStereo.on();
            currentStereo.setCD();
            currentStereo.setVolume(11);
        }
    }
}
