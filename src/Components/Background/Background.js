import React from 'react';
import Wave from '../Wave/Wave';
import './background.css';

function Background() {

  const d1 = "M0 640L38.2 638.7C76.3 637.3 152.7 634.7 228.8 646.8C305 659 381 686 457.2 685.3C533.3 684.7 609.7 656.3 685.8 637C762 617.7 838 607.3 914.2 607.7C990.3 608 1066.7 619 1142.8 628.7C1219 638.3 1295 646.7 1371.2 640C1447.3 633.3 1523.7 611.7 1561.8 600.8L1600 590L1600 901L1561.8 901C1523.7 901 1447.3 901 1371.2 901C1295 901 1219 901 1142.8 901C1066.7 901 990.3 901 914.2 901C838 901 762 901 685.8 901C609.7 901 533.3 901 457.2 901C381 901 305 901 228.8 901C152.7 901 76.3 901 38.2 901L0 901Z";
  const d2 = "M0 703L38.2 701C76.3 699 152.7 695 228.8 704.5C305 714 381 737 457.2 734.5C533.3 732 609.7 704 685.8 703.2C762 702.3 838 728.7 914.2 740.8C990.3 753 1066.7 751 1142.8 750.2C1219 749.3 1295 749.7 1371.2 741.8C1447.3 734 1523.7 718 1561.8 710L1600 702L1600 901L1561.8 901C1523.7 901 1447.3 901 1371.2 901C1295 901 1219 901 1142.8 901C1066.7 901 990.3 901 914.2 901C838 901 762 901 685.8 901C609.7 901 533.3 901 457.2 901C381 901 305 901 228.8 901C152.7 901 76.3 901 38.2 901L0 901Z";
  const d3 = "M0 789L38.2 787C76.3 785 152.7 781 228.8 771.3C305 761.7 381 746.3 457.2 751.5C533.3 756.7 609.7 782.3 685.8 790.7C762 799 838 790 914.2 775.5C990.3 761 1066.7 741 1142.8 745.3C1219 749.7 1295 778.3 1371.2 788.8C1447.3 799.3 1523.7 791.7 1561.8 787.8L1600 784L1600 901L1561.8 901C1523.7 901 1447.3 901 1371.2 901C1295 901 1219 901 1142.8 901C1066.7 901 990.3 901 914.2 901C838 901 762 901 685.8 901C609.7 901 533.3 901 457.2 901C381 901 305 901 228.8 901C152.7 901 76.3 901 38.2 901L0 901Z";
  const d4 = "M0 795L38.2 793.7C76.3 792.3 152.7 789.7 228.8 789.7C305 789.7 381 792.3 457.2 803.8C533.3 815.3 609.7 835.7 685.8 842.8C762 850 838 844 914.2 844C990.3 844 1066.7 850 1142.8 851.8C1219 853.7 1295 851.3 1371.2 847C1447.3 842.7 1523.7 836.3 1561.8 833.2L1600 830L1600 901L1561.8 901C1523.7 901 1447.3 901 1371.2 901C1295 901 1219 901 1142.8 901C1066.7 901 990.3 901 914.2 901C838 901 762 901 685.8 901C609.7 901 533.3 901 457.2 901C381 901 305 901 228.8 901C152.7 901 76.3 901 38.2 901L0 901Z";
  const d5 ="M0 557L38.2 554.8C76.3 552.7 152.7 548.3 228.8 550C305 551.7 381 559.3 457.2 571.7C533.3 584 609.7 601 685.8 604C762 607 838 596 914.2 591.2C990.3 586.3 1066.7 587.7 1142.8 596.2C1219 604.7 1295 620.3 1371.2 627.2C1447.3 634 1523.7 632 1561.8 631L1600 630L1600 901L1561.8 901C1523.7 901 1447.3 901 1371.2 901C1295 901 1219 901 1142.8 901C1066.7 901 990.3 901 914.2 901C838 901 762 901 685.8 901C609.7 901 533.3 901 457.2 901C381 901 305 901 228.8 901C152.7 901 76.3 901 38.2 901L0 901Z";
  
  return (
    <div>
      <div className='background-container'>
        <div className='background-color' />
        <div className='bg-wave wave-1-bg'>
          <Wave 
          d={d1} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'100%'} 
          newWidth={'150%'} 
          height={900} 
          newHeight={900} 
          fill={'#B9005D'} 
          bottom={'50'} 
          duration={15} 
          position={'absolute'} />
        </div>
        <div className='bg-wave wave-2-bg'>
          <Wave d={d2} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'200%'}  
          newWidth={'100%'} 
          height={900} 
          newHeight={900} 
          rotateVertical={'rotate(180deg)'} 
          rotateHorizontal={'rotate(180deg)'} 
          fill={'#A00065'} 
          bottom={'50'} 
          duration={18} 
          position={'absolute'} />
        </div>
        <div className='bg-wave wave-3-bg'>
          <Wave d={d3} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'120%'} 
          newWidth={'100%'}
          height={900}
          newHeight={900} 
          rotateVertical={'rotate(180deg)'} 
          rotateHorizontal={'rotate(180deg)'} 
          fill={'#83006a'} 
          bottom={'50'} 
          duration={15} 
          position={'absolute'} />
        </div>
        <div className='bg-wave wave-4-bg'>
          <Wave d={d4} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'100%'} 
          newWidth={'170%'} 
          height={1000} 
          newHeight={1000} 
          fill={'#630a6c'} 
          bottom={'50'} 
          duration={8} 
          position={'absolute'} />
        </div>
        <div className='bg-wave wave-5-bg'>
          <Wave d={d5} 
          svgWidth={'1600'} 
          svgHeight={'900'} 
          viewBox={'0 0 1600 900'} 
          width={'200%'}
          newWidth={'100%'} 
          height={900} 
          newHeight={900} 
          rotateVertical={'rotate(180deg)'} 
          rotateHorizontal={'rotate(180deg)'} 
          fill={'#3F126A'} 
          bottom={'-200'} 
          duration={6} 
          position={'absolute'}/>
        </div>
      </div>
    </div>
  )
}

export default Background