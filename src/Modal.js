import React, { Component } from 'react';

class Modal extends Component {

  
    render(){
        return(
            <div>
                <div id='modal1' className='modal'>
                    <div className='modal-content'>
                        <ul className='modal-list'>
                            <li>To begin play, "Click for first roll".</li>

                            <li>Click on each die to lock or unlock your choice.  You can lock or unlock at any time before each roll.</li>

                           
                            <li>During each of your rolls, you can select any available Upper or Lower point category that maximizes your point total.</li>

                            <li>However, you must select a scoring category whether or not you meet the requirements.  A zero score will be recorded if no matching points are found.</li>

                            <li>Total score is compiled as you play.</li>

                            <li>When all scoring categories are completed, the game will signal over.</li>

                        </ul>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">close</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
