package com.zqkc.util;

import java.io.File;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class StringUtil {

	/**
	 * 关键数据MD5加密
	 * 
	 * @param code
	 * @return
	 */
	public static String entry(String code) {
		MessageDigest md = null;
		String pwd = "";
		try {
			md = MessageDigest.getInstance("MD5");
			md.update(code.getBytes());
			pwd = new BigInteger(1, md.digest()).toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		return pwd;
	}

	public static String getIpAddr(HttpServletRequest request) {
		String ip = request.getHeader("x-forwarded-for");
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("PRoxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getHeader("WL-Proxy-Client-IP");
		}
		if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
			ip = request.getRemoteAddr();
		}
		return ip.equals("0:0:0:0:0:0:0:1") ? "127.0.0.1" : ip;
	}

	public static boolean delFile(String path) {
		boolean flag = false;
		try {
			File myDelFile = new File(path);
			myDelFile.delete();
			flag = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return flag;
	}
	/**
	 * 解析xml文件
	 * @param path
	 * @return
	 * @throws Exception
	 */
	      public  List<String>  analysisUtil(String path) throws Exception{
		
		// 从DOM工厂中获得DOM解析器
				DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
				// 把要解析的xml文档读入DOM解析器中
				DocumentBuilder dbBuilder = dbFactory.newDocumentBuilder();
				// Document doc=dbBuilder.parse("src/main/resources/xml/projecttype.xml");
				org.w3c.dom.Document doc = dbBuilder.parse(path);
				// 得到文档名称为type的元素的节点列表
				NodeList nList = doc.getElementsByTagName("type");
				// 解析出来的类型存放在list集合里
				List<String> list = new ArrayList<String>();
				for (int i = 0; i < nList.getLength(); i++) {
					Element node = (Element) nList.item(i);// 遍历该集合，显示结合中的元素机器子元素的名字
					String name = node.getTextContent();
					list.add(name);
				}				
		        return list;
		
	}

}
