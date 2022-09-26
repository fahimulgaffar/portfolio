import Draggable from 'react-draggable';
import './Stopwatch.css'
import './Clock.css'
import './pingpong.css'
import './calculator.css'
import './App.css'
import './todo.css'
import './weather.css'
import './readme.css'
import './resume.css'
import './Contacts.css'
import './Hero.css'
import {handleClick, handleClose, handleMinimize, handleappClose, handleappMinimize, handleappClick, handletrashMinimize, handletrashClose, handletrashClick, refresh, close, scrollto} from'./btn.js'
import {handlestopwatchClick, handlestopwatchClose} from './Stopwatch.js'
import {handleclockClick, handleclockClose} from './clock.js'
import {handlepingpongClick, handlepingpongClose} from './pingpong.js'
import {handlecalculatorClick, handlecalculatorClose} from './calculator.js'
import {handletodolistClick, handletodolistClose} from './todo.js'
import {handleweatherClick, handleweatherClose} from './weather.js'
import {handlereadmeClick, handlereadmeClose} from './readme.js'
import {handleresumeClick, handleresumeClose} from './resume.js'
import{timer, scroll} from './btn.js'


function App() {

  return (
    <div className="Background" id='bg'>
    <div className='mainnavcontainer'>
      <div className='Mainnav'>
        <p role='button' href='#/contacts' onClick={scroll}>Contact</p>
      </div>
    </div>

    <div className='herocontainercontainer'>
      
      <div class="hero-container">
        <p class="line-1 anim-typewriter"><span>&#62;</span>&nbsp;Fahimul Gaffar</p>
        <div className="hero-description">
          I am currently finishing my Computer Science degree. My passion is problem solving,
          beautiful user experiences and efficient yet reusable coding. Check out my skills through this portfolio website and click on the <span style={{color: "#747fe0", fontWeight: 'bold', cursor: 'pointer'}} onClick={scrollto}>"CLICK ME TO START"</span> below in the terminal for a surprise.
        </div>
      </div>
    </div>





    <div className='mainshadow'>
      <div className='shadow' id='shadow'>
        <div className='terminal-nav'>
          <p><span style={{color: "#525f7f"}}>Terminal:</span></p>
        </div>
        <div className='terminal-content' id='terminal-content'>
          <p><span>&#62;&nbsp;</span>Fahimul.currentLocation<br></br><span style={{color: "#E7D184"}}>"Canada, NL"</span></p>
          <p ><span>&#62;&nbsp;</span>Fahimul.contactInfo<br></br><span style={{color: "#E7D184"}}>["</span><a style={{color: "#35FEFF", cursor: 'pointer', textDecorationLine: 'none'}} href="mailto: fgaffar@mun.ca" target="_blank" rel="noopener noreferrer" >fgaffar@mun.ca</a><span style={{color: "#E7D184"}}>", "</span><a style={{color: "#35FEFF", cursor: 'pointer', textDecorationLine: 'none'}} href="https://www.linkedin.com/in/fahimul-g-34918598" target="_blank" rel="noopener noreferrer">LinkedIn</a><span style={{color: "#E7D184"}}>", "</span><a style={{color: "#35FEFF", cursor: 'pointer' , textDecorationLine: 'none'}} href="https://github.com/fahimulgaffar" target="_blank" rel="noopener noreferrer">github</a><span style={{color: "#E7D184"}}>"]</span></p>
          <p><span>&#62;&nbsp;</span>Fahimul.interests<br></br><span style={{color: "#E7D184"}}>["design", "problem solving", "cooking", "travel"]</span></p>
          <p><span>&#62;&nbsp;</span>Fahimul.education<br></br><span style={{color: "#E7D184"}}>"B.Sc. Computer Science - Memorial University of NewFoundland, Canada"</span></p>
          <p><span>&#62;&nbsp;</span>Fahimul.skills<br></br><span style={{color: "#E7D184"}}>["Python", "JavaScript", "C/C++", "React", "Pandas", "mathlib", "wordpress", "git"]</span></p>
          <div className='lasttext'><span>&#62;&nbsp;</span>Fahimul.machintosh</div>
          <p className='animate'><span style={{color: "#E7D184"}}>"</span><span style={{color: "#35FEFF", cursor: 'pointer'}} onClick={timer}>CLICK ME TO START</span><span style={{color: "#E7D184"}}>"</span></p>
        </div>



        <div className='nav_bar'> 

          <div className='Logo_container'>
            <img className='Logo_black' src='../Assets/Apple_logo_black.png' alt=''></img> 
            <img className='Logo' src='../Assets/apple_logo.png' alt=''></img>

            <div className='Logo_content'>
              <a role="button" href="#/About" onClick={handlereadmeClick}>About this Macintosh...</a>
              <div className='_'>
                <p>----------------------</p>
              </div>
              <a role="button" href="#/Calculatorbtn" onClick={handlecalculatorClick}>Calculator</a>
              <a role="button" href="#/StopWatchbtn" onClick={handlestopwatchClick}>Stop Watch</a>
              <a role="button" href="#/Clockbtn" onClick={handleclockClick}>Clock</a>
              <a role="button" href="#/Tictactoebtn" onClick={handlepingpongClick}>Ping Pong</a>
              <a role="button" href="#/Todolistbtn" onClick={handletodolistClick}>To Do List</a>
              <a role="button" href="#/Weatherbtn" onClick={handleweatherClick}>Weather App</a>
              <div className='_'>
                <p>----------------------</p>
              </div>
              <a role="button" href="#/Restartbtn" onClick={refresh}>Restart</a>
              <a role="button" href="#/Shut_dowmbtn" onClick={close}>Shut down</a>
            </div>
          </div>

          <div className='File'>
            <button className='Filebtn'>File</button>
            <div className='File_content'>
              <a role="button" href="#/New_Folderbtn">New Folder</a>
              <a role="button" href="#/Openbtn">Open</a>
              <a role="button" href="#/Printbtn">Print</a>
              <a role="button" href="#/Closebtn">Close</a>
              <div className='_'>
                <p>----------------</p>
              </div>
              <a role="button" href="#/Get_infobtn">Get Info</a>
              <a role="button" href="#/Sharingbtn">Sharing...</a>
              <a role="button" href="#/Duplicatebtn">Duplicate</a>
              <a role="button" href="#/Make_aliasbtn">Make Alias</a>
              <a role="button" href="#/Put_awaybtn">Put Away</a>
              <div className='_'>
                <p>----------------</p>
              </div>
              <a role="button" href="#/Findbtn">Find...</a>
              <a role="button" href="#/Find_againbtn">Find Again</a>
              <div className='_'>
                <p>----------------</p>
              </div>
              <a role="button" href="#/Page_setupbtn">Page Setup...</a>
              <a role="button" href="#/Print_desktopbtn">Print Desktop...</a>
            </div>
          </div>

          <div className='Edit'>
            <button className='Editbtn'>Edit</button>
            <div className='Edit_content'>
              <a role="button" href="#/Undobtn">Undo</a>
              <div className='_'>
                <p>-----------------</p>
              </div>
              <a role="button" href="#/Cutbtn">Cut</a>
              <a role="button" href="#/Copybtn">Copy</a>
              <a role="button" href="#/Pastebtn">Paste</a>
              <a role="button" href="#/Clearbtn">Clear</a>
              <a role="button" href="#/Select_Allbtn">Select All</a>
              <div className='_'>
                <p>-----------------</p>
              </div>
              <a role="button" href="#/Show_Clipboard">Show Clipboard</a>
            </div>
          </div>

          <div className='View'>
            <button className='Viewbtn'>View</button>
            <div className='View_content'>
              <a role="button" href="#/Small_Iconbtn">Small Icon</a>
              <a role="button" href="#/Iconbtn">Icon</a>
              <a role="button" href="#/Namebtn">Name</a>
              <a role="button" href="#/Sizebtn">Size</a>
              <a role="button" href="#/Kindbtn">Kind</a>
              <a role="button" href="#/Labelbtn">Label</a>
              <a role="button" href="#/Datebtn">Date</a>
            </div>
          </div>

          <div className='Special'>
            <button className='Specialbtn'>Special</button>
            <div className='Special_content'>
              <a role="button" href="#/Clean_Up_Desktopbtn">Clean Up Desktop</a>
              <a role="button" href="#/Empty_Trashbtn">Empty Trash...</a>
              <div className='_'>
                <p>------------------</p>
              </div>
              <a role="button" href="#/Eject_Diskbtn">Eject Disk</a>
              <a role="button" href="#/Erase_Diskbtn">Erase Disk...</a>
            </div>
          </div>

          <div className='Help'>
            <button className='Helpbtn'>Help</button>
            <div className='Help_content'>
              <a role="button" href="#/About_Mebtn">About Me...</a>
              <div className='_'>
                <p>------------------</p>
              </div>
              <p className='Made_By_Fahim'>Made by Fahimul Gaffar</p>
            </div>
          </div>
          
        </div>

        <div className='Container'>

          <Draggable bounds='parent'>
            <div className='mac-mini-folder'>
              <div className="mac-mini-folder-btn" onDoubleClick={handleClick}></div>
              <div className='macintosh-label'>Macintosh HD</div>
            </div>
          </Draggable>

          <Draggable bounds='parent' handle='#mac-modal-header'>
            <div className="mac-modal">
              <div className='mac-modal-header' id='mac-modal-header'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                <div className='line4'></div>
                <div className='line5'></div>
                <div className='line6'></div>
                <div className="mac-modal-close" onClick={handleClose}></div>
                <div className='macintoshHD'>Macintosh HD</div>
                <div className="mac-modal-minimize" onClick={handleMinimize}></div>
              </div>
              <div className='mac-modal-subheader'>
                <div className='line7'></div>
                <div className='mac-modal-subheader-content1'>2 items</div>
                <div className='mac-modal-subheader-content2'>6.8 MB in disk</div>
                <div className='mac-modal-subheader-content3'>13.1 MB available</div>
              </div>
              <div className="mac-modal_content">
                <Draggable bounds='parent'>
                  <div className='application-folder'>
                    <div className="application-folder-btn" onDoubleClick={handleappClick} ></div>
                    <div className='application-label'>Application</div>
                  </div>
                </Draggable>
                <Draggable bounds='parent'>
                  <div className='resume-folder'>
                    <div className="resume-folder-btn" onDoubleClick={handleresumeClick} ></div>
                    <div className='resume-label'>Resume</div>
                  </div>
                </Draggable>
              </div>
            </div>
          </Draggable>

          <Draggable bounds='parent'>
            <div className='trash-folder'>
              <div className="mac-trash-can-btn" onDoubleClick={handletrashClick}></div>
              <div className='trash-label'>Trash</div>
            </div>
          </Draggable>


          <Draggable bounds='parent'>
            <div className='mac-readme'>
              <div className="mac-readme-btn" onDoubleClick={handlereadmeClick}></div>
              <div className='readme-label'>Read Me</div>
            </div>
          </Draggable>

          <Draggable bounds='parent' handle='#application-header'>
                <div className="application-modal" id='application-modal'>
                  <div className='application-header' id='application-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="application-close" onClick={handleappClose}></div>
                    <div className='macintoshHD'>Application</div>
                    <div className="application-minimize" onClick={handleappMinimize}></div>
                  </div>
                  <div className='mac-modal-subheader'>
                    <div className='line7'></div>
                    <div className='mac-modal-subheader-content1'>6 items</div>
                    <div className='mac-modal-subheader-content2'>2.1 MB in disk</div>
                    <div className='mac-modal-subheader-content3'>3.4 MB available</div>
                  </div>
                  <div className="application-content">
                    <Draggable bounds='parent'>
                      <div className='calculator-folder'>
                        <div className="calculator-folder-btn" onDoubleClick={handlecalculatorClick}></div>
                        <div className='calculator-label'>Calculator</div>
                      </div>
                    </Draggable>
                    <Draggable bounds='parent'>
                      <div className='stopwatch-folder'>
                        <div className="stopwatch-folder-btn" onDoubleClick={handlestopwatchClick}></div>
                        <div className='stopwatch-label'>Stop Watch</div>
                      </div>
                    </Draggable>
                    <Draggable bounds='parent'>
                      <div className='clock-folder'>
                        <div className="clock-folder-btn"  onDoubleClick={handleclockClick}></div>
                        <div className='clock-label'>Clock</div>
                      </div>
                    </Draggable>

                    <Draggable bounds='parent'>
                      <div className='pingpong-folder'>
                        <div className="pingpong-folder-btn" onDoubleClick={handlepingpongClick}></div>
                        <div className='pingpong-label'>Ping Pong</div>
                      </div>
                    </Draggable>
                    <Draggable bounds='parent'>
                      <div className='todolist-folder'>
                        <div className="todolist-folder-btn" onDoubleClick={handletodolistClick}></div>
                        <div className='todolist-label'>To Do List</div>
                      </div>
                    </Draggable>
                    <Draggable bounds='parent'>
                      <div className='weather-folder'>
                        <div className="weather-folder-btn" onDoubleClick={handleweatherClick}></div>
                        <div className='weather-label'>Weather</div>
                      </div>
                    </Draggable>



                  </div>
                </div>
          </Draggable>



            <Draggable bounds='parent' handle='#trash-header'>
                <div className="trash-modal">
                  <div className='trash-header' id='trash-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="trash-close" onClick={handletrashClose}></div>
                    <div className='macintoshHD'>Trash</div>
                    <div className="trash-minimize" onClick={handletrashMinimize}></div>
                  </div>
                  <div className='mac-modal-subheader'>
                    <div className='line7'></div>
                    <div className='mac-modal-subheader-content1'>0 items</div>
                    <div className='mac-modal-subheader-content2'>1 MB in disk</div>
                    <div className='mac-modal-subheader-content3'>1 MB available</div>
                  </div>
                  <div className="trash-content">
                    
                  </div>
                </div>
            </Draggable>





            <Draggable bounds='parent' handle='#stopwatch-header'>
                <div className="stopwatch-modal">
                  <div className='stopwatch-header' id='stopwatch-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="stopwatch-close" onClick={handlestopwatchClose}></div>
                    <div className='macintoshHD'>Stopwatch</div>
                  </div>
                  <div className="stopwatch-content">
                      <h1 className='Stopwatchlabel'>Stopwatch</h1>
                      <p><span id="seconds">00</span>:<span id="tens">00</span></p>
                      <button className='stopwatchbutton' id='start' >Start</button>
                      <button className='stopwatchbutton' id='stop' >Stop</button>
                      <button className='stopwatchbutton' id='reset' >Reset</button>
                  </div>
                </div>
            </Draggable>





            <Draggable bounds='parent' handle='#clock-header'>
                <div className="clock-modal">
                  <div className='clock-header' id='clock-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="clock-close" onClick={handleclockClose}></div>
                    <div className='macintoshHD'>Clock</div>
                  </div>
                  <div className="clock-content">
                    <div id="MyClockDisplay" className="clock"></div>
                  </div>
                </div>
            </Draggable>





            <Draggable bounds='parent' handle='#pingpong-header'>
                <div className="pingpong-modal">
                  <div className='pingpong-header' id='pingpong-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="pingpong-close" onClick={handlepingpongClose}></div>
                    <div className='macintoshHD'>Ping Pong</div>
                  </div>
                  <div className="pingpong-content">
                    <canvas></canvas>
                  </div>
                </div>
            </Draggable>




            <Draggable bounds='parent' handle='#calculator-header'>
                <div className="calculator-modal">
                  <div className='calculator-header' id='calculator-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="calculator-close" onClick={handlecalculatorClose}></div>
                    <div className='macintoshHD'>Calculator</div>
                  </div>
                  <div className="calculator-content">


                  <div class="calculator">

                    <input type="text" class="calculator-screen" value="" disabled />
                    
                    <div class="calculator-keys">
                      
                      <button type="button" class="operator" value="+">+</button>
                      <button type="button" class="operator" value="-">-</button>
                      <button type="button" class="operator" value="*">&times;</button>
                      <button type="button" class="operator" value="/">&divide;</button>

                      <button type="button" value="1">1</button>
                      <button type="button" value="2">2</button>
                      <button type="button" value="3">3</button>


                      <button type="button" value="4">4</button>
                      <button type="button" value="5">5</button>
                      <button type="button" value="6">6</button>


                      <button type="button" value="7">7</button>
                      <button type="button" value="8">8</button>
                      <button type="button" value="9">9</button>


                      <button type="button" value="0">0</button>
                      <button type="button" class="decimal" value=".">.</button>
                      <button type="button" class="all-clear" value="all-clear">AC</button>

                      <div>
                        <button className='equal' type="button" class="equal-sign operator" value="=">=</button>
                      </div>
                     

                    </div>
                  </div>


                  </div>
                </div>
            </Draggable>





            <Draggable bounds='parent' handle='#todolist-header'>
                <div className="todolist-modal">
                  <div className='todolist-header' id='todolist-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="todolist-close" onClick={handletodolistClose}></div>
                    <div className='macintoshHD'>To Do List</div>
                  </div>
                  <div className="todolist-content">

                    

                  <div class="row">
                    <div className="helpText">
                      <p id="first">Enter text into the input field to add items to your list.</p>
                      <p id="second">Click the item to mark it as complete.</p>
                      <p id="third">Click the "X" to remove the item from your list.</p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-12">
                      <input className='input' id="userInput" type="text" placeholder="New item..." maxlength="27"></input>
                      <button id="enter">Add<i class="fas fa-pencil-alt"></i></button>
                    </div>
                  </div>

                  <div class="row">
                    <div class="listItems col-12">
                      <ul class="col-12 offset-0 col-sm-8 offset-sm-2">
                      </ul>
                    </div>
                  </div>

                
                  </div>
                </div>
            </Draggable>




            <Draggable bounds='parent' handle='#weather-header'>
                <div className="weather-modal">
                  <div className='weather-header' id='weather-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="weather-close" onClick={handleweatherClose}></div>
                    <div className='macintoshHD'>Weather</div>
                  </div>
                  <div className="weather-content">



                  <div class="container-fluid">



                          <section class="main">



                          <section class="inputs">
                              <input type="text" placeholder="Enter any city..." id="cityinput"></input>
                              <input type="submit" value="Submit" id="add"></input>
                          </section>


                          <section class="display">
                              <div class="wrapper">
                                  <h2 id="cityoutput"></h2>
                                  <p id="description"></p>
                                  <p id="temp"></p>
                                  <p id="wind"></p>

                              </div>
                          </section>
                          </section>

                          </div>




                  </div>
                </div>
            </Draggable>


            <Draggable bounds='parent' handle='#readme-header'>
                <div className="readme-modal">
                  <div className='readme-header' id='readme-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="readme-close" onClick={handlereadmeClose}></div>
                    <div className='macintoshHD'>Readme</div>
                  </div>
                  <div className="readme-content">
                    <p>
                        7.0.1 READ ME<br></br><br></br>

                        This Read Me document provides late-breaking news about
                        Macintosh® system software 7.0.1. Some of this information is
                        not in the documentation that came with your computer.<br></br><br></br>

                        MACINTOSH QUADRA™ 700 AND 900 INFORMATION
                        For information on using the Cache Switch control panel, see the
                        compatibility list provided with your computer.
                        If you use A/ROSE, you need version 1.1.5, which comes with
                        system software 7.0.1<br></br><br></br>
                        
                        MACINTOSH POWERBOOK™ 140 AND 170 INFORMATION
                        Using virtuel memory increases hard disk use and therefore draíns
                        battery power faster. It's a good idea to plug in the power adapter
                        while virtual memory is turned on.<br></br><br></br>

                        LASERWRITER@ OR STYLEWRITER@ PRINTER INFORMATION
                        If your printer has newer printer software than is available in the
                        7.0.1 release, you may need to install the newer software on your
                        computer after you finish the 7.0.1 installation. Check the
                        documentation and disks that came with your printer to determine
                        whether you need to install printer software.<br></br><br></br>

                        HYPERCARD@ INFORMATION
                        You must use HyperCard 2.1 with system software 7.0.1.<br></br><br></br>

                        VIRTUAL MEMORY INFORMATION
                        When using virtuel memory with a RAM disk, the number displayed
                        as Total Memory in the
                        "About This Macintosh" window (for example,
                        "10208K used as RAM on Macintosh HD" ) is incorrect. To
                        determine how much disk space is being used as RAM, subtract the
                        size of your RAM disk from the Totel Memory number displayed.
                        (The size of your RAM disk is shown in the Memory control panel.)<br></br><br></br>

                        CLOSEVIEW INFORMATION
                        CloseView does not work well if virtual memory has been turned
                        on. If you are having problems with CloseView, open the Memory
                        control panel to verify that virtual memory is off.<br></br><br></br>

                        DAL INFORMATION
                        System 7.0.1 includes version 1.3 of the DAL driver. This new
                        version has the following network adapters built in: asynchronous,
                        ADSP, ADSP tool, and MacDFT 3270. Additional network adapters,
                        as well as development and troubleshooting aids, are in the DAL
                        1.3 Toolkit available from APDA.<br></br><br></br>

                        © 1991 Apple Computer, Inc. Apple, Macintosh, LaserWriter, and
                        StyleWriter are trademarks of Apple Computer, Inc., registered in
                        the U.S. and other countries. Quadra and PowerBook are trademarks
                        of Apple Computer, Inc. HyperCard is a registered trademark of
                        Apple Computer, Inc., licensed to Claris Corporation.
                    </p>
                  </div>
                </div>
            </Draggable>

            <div className="Welcome">
              <div className='decor'>
                <h1>Welcome to Fahimul's Macintosh...</h1>
              </div>
            </div>


        
        </div>

      </div>
    </div>
      
      <h2 id="contact" className="section-title" data-reactid="201">Contact me!
      <br></br>
      <span style={{display: 'block', width: '60px', borderBottom: '10px solid', margin: '0 auto', height: '30px', color: '#747FE0'}}></span>
      </h2>
      <div className='info'>
        <a href='mailto: fgaffar@mun.ca' target="_blank" rel="noopener noreferrer">fgaffar@mun.ca</a>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp; </span>
        <a href='https://www.linkedin.com/in/fahimul-g-34918598' target="_blank" rel="noopener noreferrer" >LinkedIn</a>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp; </span>
        <a href='https://github.com/fahimulgaffar' target="_blank" rel="noopener noreferrer">github</a>
      </div>
      <div className='footer'>
        <p>Made by Fahimul Gaffar © 2022</p>
      </div>

      <div className="resume-modal">
                  <div className='resume-header' id='resume-header'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                    <div className='line5'></div>
                    <div className='line6'></div>
                    <div className="resume-close" onClick={handleresumeClose}></div>
                    <div className='macintoshHD'>Resume</div>
                  </div>
                  <div className="resume-content">
                    <iframe className='resume' src="../Assets/FahimulGaffar.pdf" title="Resume"></iframe>
                  </div>
        </div>





    </div>
  );
}

export default App;
