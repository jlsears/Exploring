using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HF_DesignPatterns
{
    class stereoOnCommand : ICommand
    {
        Stereo currentStereo;

        public stereoOnCommand(Stereo stereo)
        {
            this.currentStereo = stereo;
        }

        public void execute()
        {
            currentStereo.on();
            currentStereo.setCD();
            currentStereo.setVolume(11);
        }

        public void undo()
        {
            currentStereo.off();
        }
    }
}
