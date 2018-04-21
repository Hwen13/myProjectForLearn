package com.zqkc.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;



public class StringUtil {
	
	/**
	 *  关键数据MD5加密
	 * @param code
	 * @return
	 */
	public static String entry(String code){
		MessageDigest md = null;
		String pwd = "";
		try {
			md = MessageDigest.getInstance("MD5");
			md.update(code.getBytes());
			pwd =new BigInteger(1, md.digest()).toString();
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return pwd;
	}
	
}
