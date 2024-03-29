import { Request, Response } from 'express';
import { PostService } from './post.services';

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);

    res.json({
      success: true,
      message: 'Post created successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  console.log(req.query);
  try {
    const options = req.query;
    const result = await PostService.getAllPost(options);

    res.json({
      success: true,
      message: 'Retrieved all post successfully',
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await PostService.getSinglePost(id);

    res.json({
      success: true,
      message: 'Retrieved single post successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const result = await PostService.updatePost(id, data);

    res.json({
      success: true,
      message: 'Post updated successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await PostService.deletePost(id);

    res.json({
      success: true,
      message: 'Post deleted successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();

    res.json({
      success: true,
      message: 'Result',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
