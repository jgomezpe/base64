# Base64
Java Script for converting an uint8 array to a base64 string and backwards.
<h3>Version 1.0</h3>
<h3>Copyright (c)</h3>
&nbsp;Author: <A HREF="https://disi.unal.edu.co/~jgomezpe/"> Jonatan Gomez-Perdomo </A>
&nbsp;E-mail: <A HREF="mailto:jgomezpe@unal.edu.co">jgomezpe@unal.edu.co</A>

&nbsp;Ready to use: <A HREF="https://jgomezpe.github.io/base64/src/base64.js">https://jgomezpe.github.io/base64/src/base64.js</A>

&nbsp;Source code: <A HREF="https://github.com/jgomezpe/base64/">https://github.com/jgomezpe/base64/</A>


&nbsp;Demo: <A HREF="https://jgomezpe.github.io/numtseng/base64/">https://jgomezpe.github.io/numtseng/base64/</A>
&nbsp;Base64 in Numtseng: <A HREF="https://numtseng.com/base64/">https://numtseng.com/base64/</A>

&nbsp;All rights reserved.

<h3>Usage</h3>
<ul>
    <li> <b><i>Base64.decode(str)</i></b>: Decodes a base64 string into a uint8 array if possible. <i>throws</i> An exception if the string does not represent a valid base64 code.</li>
    <li> <b><i>Base64.encode(blob)</i></b>: Encodes a uint8 array into a base64 string if possible. <i>throws</i> An exception if the argument is not a uint8 array.</li>
    <li> <b><i>Base64.atob(str, encoder=new TextEncoder())</i></b>: Encodes a string into a base64 string if possible. <i>throws</i> an exception if the argument is not a string.</li>
    <li> <b><i>Base64.btoa(str, decoder=new TextDecoder())</i></b>: Decodes a base64 string into a string if possible. <i>throws</i> an exception if the string does not represent a valid base64 code.</li>
    
</ul>

<h3>Licence</h3>
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

<ul>
    <li> Redistributions of source code must retain the above copyright notice,
            this list of conditions and the following disclaimer.</li>
    <li> Redistributions in binary form must reproduce the above copyright notice,
            this list of conditions and the following disclaimer in the documentation
            and/or other materials provided with the distribution.</li>
    <li> Neither the name of the copyright owners, their employers, nor the
            names of its contributors may be used to endorse or promote products
            derived from this software without specific prior written permission.</li>
</ul>

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
        DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNERS OR CONTRIBUTORS BE
        LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
        CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
        SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
        HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
        OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF 
        THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
