package com.zqkc.dao;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zqkc.model.Images;

/**
 * 业务图片持久层接口类
 * @author Administrator
 *
 */
@Repository
public interface IimagesDao {
   /**
    * 添加业务图片
    * @param images
    * @return
    * @throws SQLException
    */
   public int addImages(Images images)throws SQLException;
   /**
    * 删除业务图片
    * @param id
    * @return
    * @throws SQLException
    */
   public int deleteImages(int id)throws SQLException;
   /**
    * 修改业务图片
    * @param images
    * @return
    * @throws SQLException
    */
   public int updateImages(Images images)throws SQLException;
   /**
    * 通过id查找业务图片
    * @param id
    * @return
    * @throws SQLException
    */
   public Images findByIdImages(int id)throws SQLException;
   /**
    * 查找所有业务图片
    * @return
    * @throws SQLException
    */
   public List<Images> findAllImages()throws SQLException;
}
