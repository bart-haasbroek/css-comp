$(document).ready(function(){


  composition = function( composition_name ) {
 
   self = this;   
 
   // Convert css time property in a usable string
  this.get_time = function( prop ){
    prop = prop.replace('s', ' ');
    prop = parseFloat( prop );
    return prop;
  }
 
   //Get all elements from the same composition and make a list of relative delays
   this.get_elements = function(){
 
     comp_elements = []
 
      $('.animation[data-composition="' + composition_name + '"]').each(function(){
        comp_elements.push( this );
      });
     
     return comp_elements;
 
   } //End function
   
   
   
   this.get_rel_delay = function(){
 
     comp_name = []
 
      $('.animation[data-composition="' + composition_name + '"]').each(function(index){
        
        if ( index == 0 ) {
          return;
        }
        
        delay = $(this).data('rel_delay'); 
        
        comp_name.push(delay);
      });
     
     return comp_name;
 
   } //End function
   
 
 
   this.set_delay = function(){
     
      // Check when previous element is finished and let this element start after that
      $('.animation[data-composition="' + composition_name + '"]').each(function(index){

        comp_elements = self.get_elements();
        
        
        
          if ( index == 0 ) {
            return;
          }
        
        
        
         prev_el = comp_elements[index];
        
        console.log(prev_el)
         
         prev_el = $(this).prev();
       
         if( prev_el.length > 0 ) {
           
           // Get duration of previous element
            previous_duration = prev_el.css('animation-duration');           
            previous_duration = self.get_time(previous_duration);
            
           // Get delay of previous element
            previous_delay = prev_el.css('animation-delay');
            previous_delay = self.get_time(previous_delay);
           
           raw_delay = previous_duration + previous_delay;
           
           this_delay = index - 1;
                     
           element_rel_delay = self.get_rel_delay();
           total_delay = raw_delay + element_rel_delay[ this_delay ];
           total_delay = Math.round(total_delay * 100) / 100;
           
           console.log( total_delay );
           
           $(this).css('animation-delay', total_delay + 's');
                
         } // end if  
        
      });
       
 
   } // End function
   
   self.set_delay();
 
} /* End class */



 
intro = new composition( 'intro' );








/*composition = function( composition_name ) {

   self = this;

   //Sets all delays from the previous element

   this.get_relative_delay = function(){

      composition_intro = {
         element_1 : '.5s',
         element_2 : '.1s',
         element_3 : '.7s'
      }

      //console.log( composition_intro.1 );

      $('.animation[data-composition="' + composition_name + '"]').each(function(index){
         nr = index + 1;
         nr = nr.toString();
         nr = 'element_'+nr;
         console.log(nr);   
         console.log( composition_intro.nr );

      });


   }


   //Get all elements from the same composition and make a list of relative delays
   this.get_elements = function(){

      comp_name = {}

      $('.animation[data-composition="' + composition_name + '"]').each(function(index){
         delay = $(this).data('rel_delay'); 
         comp_name['element' + index] = delay;
      });

      console.log( comp_name );

   } //End function


   this.start_after_previous = function(){

      // Check when previous element is finished and let this element start after that
      $('.animation[data-composition="' + composition_name + '"]').each(function(index){
      
         prev_el = $(this).prev();
       
         if( prev_el.length > 0 ) {
          
            previous_duration = prev_el.css('animation-duration');
            previous_duration = previous_duration.replace('s', ' ');
            previous_duration = parseFloat( previous_duration );

          
            previous_delay = prev_el.css('animation-delay');
            previous_delay = previous_delay.replace('s', ' ');
            previous_delay = parseFloat( previous_delay );
           
            prev_finished = previous_duration + previous_delay;

            $(this).css('animation-delay', prev_finished + 's');        
         
         } // end if  
      });

   } // End function*/
  

  composition_intro = {
    'element-1' : '.5s',
    'element-2' : '.1s'
  }

  // Get element animation style

    

  // Update all elemtents with the new delay to the element






});



