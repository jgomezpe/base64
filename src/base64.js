/**
*
* base64.js
* <P>Java Script for converting an uint8 array to a base64 string and backwards.</P>
* <P>A numtseng module <A HREF="https://numtseng.com/modules/base64.js">https://numtseng.com/modules/base64.js</A> 
*
* Copyright (c) 2021 by Jonatan Gomez-Perdomo. <br>
* All rights reserved. See <A HREF="https://github.com/jgomezpe/base64">License</A>. <br>
*
* @author <A HREF="https://disi.unal.edu.co/~jgomezpe/"> Professor Jonatan Gomez-Perdomo </A>
* (E-mail: <A HREF="mailto:jgomezpe@unal.edu.co">jgomezpe@unal.edu.co</A> )
* @version 1.0
*/

/** Object for coding/decoding uint8 arrays tto/from byte64 strings  */
class Base64Class{
    constructor(){
        /**
        * From int to char
        */
        this.i2a = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                    'a','b','c','d','e','f','g','h','i','j','k','l','m',
                    'n','o','p','q','r','s','t','u','v','w','x','y','z',
                    '0','1','2','3','4','5','6','7','8','9','+','/']
    }
   
   /** 
    * Generates the dictionary for decoding a char to int
    */ 
    init(){
        if( this.a2i === undefined ){
            this.a2i = {}
            for( var k=0; k<this.i2a.length; k++ )
                this.a2i[this.i2a[k]] = k           
        }        
    }
    
    /**
     * Decodes a base64 string into a uint8 array if possible
     * @param str Base64 string
     * @return The uint8 array encode by the base64 string if possible
     * @throws An exception if the string does not represent a valid base64 code 
     */
    decode(str){
        this.init()
        var end = str.length
        while(end>=0 && str.charAt(end-1)=='=') end--
        if(end<2) throw '·Invalid Base64 string at· ' + end
        var m = (end%4)
        if(m==1) throw '·Invalid Base64 string at· ' + (end-1)
        if(m>1) m--
        var n = 3*Math.floor(end/4) + m
        var blob = new Uint8Array(n)
        var control =[[2,4,1],[4,2,1],[6,0,2]]
        var left, right
        var k=0
        var c=0
        for(var i=0; i<n; i++){
            left = this.a2i[str.charAt(k)]
            right = this.a2i[str.charAt(k+1)]
            if(left===undefined || right===undefined) throw '·Invalid Base64 string at· ' + k
            blob[i] =  (left << control[c][0]) |( right >> control[c][1])
            k+=control[c][2]
            c = (c+1)%3
        } 
        return blob
    }
    
    /**
     * Encodes a uint8 array into a base64 string if possible 
     * @param blob uint8 array to encode
     * @return A base64 string representation of the uint8 array
     * @throws An exception if the argument is not a uint8 array 
     */
    encode(blob){
        this.init()
        if( blob.byteLength === undefined ) throw '·Not a byte array·'
        var str=''
        var m = (blob.length%3)
        if(m>0) m++        
        var n = 4*Math.floor(blob.length/3) + m
        var k=0
        var c=0
        for(var i=0; i<n; i++){
            c=i&3
            switch(c){
                case 0: str += this.i2a[blob[k]>>2]; break;
                case 1: str += this.i2a[((blob[k]&3)<<4) | (blob[k+1]>>4)]; break;
                case 2: str += this.i2a[((blob[k]&15)<<2) | (blob[k+1]>>6)]; break;
                case 3: str += this.i2a[blob[k]&63]; break;
            }
            if(c!=0) k++        
        }
        while(m>0 && m<4){
            str+='='
            m++
        }     
        return str
    }
    
    /**
     * Encodes a string into a base64 string if possible 
     * @param str str to encode
     * @param encoder Byte level encoder for the source string
     * @return A base64 string representation of the string
     * @throws An exception if the argument is not a string
     */
    atob(str, encoder=new TextEncoder()){
        return this.encode(encoder.encode(str))
    }

    /**
     * Decodes a base64 string into a string if possible
     * @param str Base64 string
     * @param encoder Byte level encoder for the traget uint8 array
     * @return The string encode by the base64 string if possible
     * @throws An exception if the string does not represent a valid base64 code 
     */
    btoa(str, decoder=new TextDecoder()){
        return decoder.decode(this.decode(str))
    }
}

/** Object for coding/decoding uint8 arrays tto/from byte64 strings  */
let Base64 = new Base64Class()
