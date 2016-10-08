composition = function( composition_name ) {
 
  self = this;   
 
  // Convert css time property in a usable string
  this.get_time = function( prop ){
    prop = prop.replace('s', ' ');
    prop = parseFloat( prop );
    return prop;
  }
 
   //Get all elements from the same composition and put them in a array
   this.get_elements = function(){
 
     comp_elements = []
 
      $('.animation[data-composition="' + composition_name + '"]').each(function( index ){
        $(this).addClass('composition-element_' + index);
        comp_elements.push( this );
      });
     
     return comp_elements;
 
   } //End function
   
   
   // Get rel delay from data-attribute and put them in a delay
   this.get_rel_delay = function(){
 
     rel_delays = []
 
      $('.animation[data-composition="' + composition_name + '"]').each(function(index){
        
        if ( index == 0 ) {
          return;
        }

        //Get the rel_delay. If it doesn't exist, the delay is 0;
        if (typeof $(this).data('rel_delay') !== 'undefined')
        {
            delay = $(this).data('rel_delay'); 
    
        } else {

            delay = 0;

        }

        // Convert delay value to integer
        delay = parseFloat( delay );
        
        // Add delay to array
        rel_delays.push(delay);
      });
     
     return rel_delays;
 
   } //End function
   
 
 
   this.set_delay = function(){

      comp_elements = self.get_elements();
      element_rel_delay = self.get_rel_delay();
     
      // Check when previous element is finished and let this element start after that
      $('.animation[data-composition="' + composition_name + '"]').each(function(index){
        
        if ( index == 0 ) {
          return;
        }

        prev_index = index - 1;
        prev_el = '.composition-element_' + prev_index;
        prev_el = $(prev_el);
   
        // Get duration of previous element
        previous_duration = prev_el.css('animation-duration');           
        previous_duration = self.get_time(previous_duration);
          
        // Get delay of previous element
        previous_delay = prev_el.css('animation-delay');
        previous_delay = self.get_time(previous_delay);

        raw_delay = previous_duration + previous_delay;

        total_delay = raw_delay + element_rel_delay[ prev_index ];        
        total_delay = Math.round(total_delay * 100) / 100;
         
        $(this).css('animation-delay', total_delay + 's');
        
      });
       
 
   } // End function
   
   self.set_delay();
 
} /* End class */





