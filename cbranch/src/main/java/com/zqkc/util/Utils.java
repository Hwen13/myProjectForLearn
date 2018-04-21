package com.zqkc.util;

public class Utils {

	private static final Exception ExpectedException = null;

	public static void checkNotNull(Object obj) throws Exception {
		if(obj==null) {
			throw ExpectedException;
			}else {
				if(obj.equals("")) {
					throw ExpectedException;
				}
			}	
	}
	
	public static void checkElementNull(String str){
		
	}
}
