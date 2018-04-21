/**
 * 
 */
package com.zqkc.util;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.multipart.MultipartFile;

import com.zqkc.model.Bannerfile;
import com.zqkc.model.Project;

import com.zqkc.model.Images;

/**
 * @author Administrator
 *
 */
public class FileUploadUtils {

	// 限制上传图片大小最大为10M

	public static final long DEFAULT_MAX_SIZE = 10485760;

	/**
	 * 轮播图上传
	 * 
	 * @param reqeust
	 * @param file
	 * @return
	 * @throws Exception
	 */
	public static final Bannerfile upload(HttpServletRequest reqeust, MultipartFile file) throws Exception {
		Bannerfile bannerfile = new Bannerfile();
		String filename = extractFilename(file);// 调用文件名构建函数
		File desc = getAbsoluteFile(extractUploadDir(), filename);// 调用绝对路径构建函数
		String filepath = extractUploadDir() + filename;// 新的文件路径
		String path = filepath.substring(filepath.indexOf("publics"));
		file.transferTo(desc);// 将上传文件写入目标文件
		bannerfile.setFilename(filename);
		bannerfile.setPath(path);

		return bannerfile;
	}

	/**
	 * 修改上传项目案例图片路径
	 * 
	 * @param reqeust
	 * @param file
	 * @return
	 * @throws Exception
	 */

	public static final Project uploadProjectFile(HttpSession session, MultipartFile file) throws Exception {
		Project projectFile = new Project();
		String filename = extractFilename(file);// 调用文件名构建函数
		File desc = getAbsoluteFile(extractUploadDir(), filename);// 调用绝对路径构建函数
		String filepath = extractUploadDir() + filename;// 新的文件路径
		String path = filepath.substring(filepath.indexOf("publics"));
		file.transferTo(desc);// 将上传文件写入目标文件
		projectFile.setPath(path);
		return projectFile;
	}

	/**
	 * 平台展示图片上传
	 * 
	 * @param request
	 * @param file
	 * @return
	 * @throws Exception
	 */
	public static final Images upload1(HttpServletRequest request, MultipartFile file) throws Exception {
		Images im = new Images();
		String filename = extractFilename(file);// 调用文件名构建函数
		File desc = getAbsoluteFile(extractUploadDir(), filename);// 调用绝对路径构建函数
		String filepath = extractUploadDir() + filename;// 新的文件路径
		String path = filepath.substring(filepath.indexOf("publics"));
		file.transferTo(desc);// 将上传文件写入目标文件
		im.setFilename(filename);
		im.setPath(path);
		return im;
	}

	/**
	 * 业务客户图片上传
	 * 
	 * @param request
	 * @param file
	 * @return
	 * @throws Exception
	 */
	public static final String upload2(HttpServletRequest request, MultipartFile file) throws Exception {
		String filename = extractFilename(file);// 调用文件名构建函数
		File desc = getAbsoluteFile(extractUploadDir(), filename);// 调用绝对路径构建函数
		String filepath = extractUploadDir() + filename;// 新的文件路径
		file.transferTo(desc);// 将上传文件写入目标文件
		return filepath;
	}

	/**
	 * 上传目录创建函数
	 * 
	 * @param uploadDir
	 * @param filename
	 * @return
	 * @throws IOException
	 */
	private static final File getAbsoluteFile(String uploadDir, String filename) throws IOException {
		if (uploadDir.endsWith("/")) {// 如果路径以/结尾，则尾部/去掉
			uploadDir = uploadDir.substring(0, uploadDir.length() - 1);
		}
		if (filename.startsWith("/")) {// 如果路径以/开头，则把头/去掉
			filename = filename.substring(0, uploadDir.length() - 1);
		}
		File desc = new File(uploadDir + "/" + filename);// 创建目标文件
		if (!desc.getParentFile().exists()) {
			desc.getParentFile().mkdirs();
		}
		if (!desc.exists()) {
			desc.createNewFile();
		}
		return desc;
	}

	/**
	 * 上传路径构建函数，负责后半部分路径
	 * 
	 * @param file
	 * @param baseDir
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	public static final String extractFilename(MultipartFile file) throws UnsupportedEncodingException {

		String filename = file.getOriginalFilename();// 获取上传文件的原名
		int slashIndex = filename.indexOf("/");
		if (slashIndex != 0) {
			filename = filename.substring(slashIndex + 1);// 获取/后面正确的文件名
		}
		// 定义服务器端文件名规则
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddhhmmssSSS");
		Random ran = new Random();
		String fname = sdf.format(date) + ran.nextInt(100);
		fname += "." + filename.substring(filename.lastIndexOf(".") + 1);
		return fname;
	}

	/**
	 * 上传路径构建函数 负责前半部分的路径
	 * 
	 * @return
	 */
	public static final String extractUploadDir() {
		String path = FileUploadUtils.class.getResource("/").getPath();// 获取项目绝对路径
		path = path.substring(1, path.length()).replace("target/classes/", "");// 把多余的部分去掉
		return path + "src/main/webapp/publics/upload/";
	}

}
